import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, updateUsers } from '../_helpers/user.thunk'
import { alertSuccess } from '../_actions/alert.actions'
import Product from './Product'
import { initialState } from '../_constants/state.interface'

type Props = {
    searchString: string,
}

const ProductList = ({ searchString }: Props) => {
    const dispatch = useDispatch()
    const ProductList = useSelector((state:initialState) => state.usersReducer)
    const alertState = useSelector((state:initialState) => state.alertReducer)
    const settings = useSelector((state:initialState) => state.settingsReducer)

    const [isFetching, setIsFetching] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)

    const usersCount = 50
    const maxUsersCount = 1000

    // Preload users
    useEffect(() => {
        if(ProductList.isPreloaded)
            return
        dispatch(loadUsers(usersCount, settings.location.nationality))
    }, [dispatch, ProductList, settings, usersCount])

    // Initialize users at first load
    useEffect(() => {
        if(!ProductList.isPreloaded
            || isInitialized
            || ProductList.users.length)
            return
        dispatch(updateUsers())
        setIsInitialized(true)
    }, [ProductList, dispatch, isInitialized, usersCount])

    // Add preloaded users to users list when scrolling
    useEffect(() => {
        if(!isFetching || searchString)
            return
        if(ProductList.users.length >= maxUsersCount) {
            dispatch(alertSuccess('End of users catalog'))
            return
        }
        dispatch(updateUsers())
        setIsFetching(false)
    }, [ProductList, dispatch, isFetching, searchString])

    // Handle scroll
    function handleScroll() {
        if ((window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight)
            return
        setIsFetching(true)
    }

    // Setup scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const filtereUsersWithSearchKey = () => {
        return ProductList.users.filter((user) => {
            const name = user.name.first + user.name.last as string
            return name.split(' ').join('').toLowerCase().includes(
                searchString.split(' ').join('').toLowerCase()
            )
        })
    }

    const filteredUsers = filtereUsersWithSearchKey()

    return (
        <div className="p-2">
            {
                filteredUsers.map((user, index) => (
                    <Product data={user} key={index}/>
                ))
            }
            {alertState !== undefined &&
                <div className={alertState.alertClass}>
                    {alertState.alertMessage}
                </div>
            }
            {(!filteredUsers.length && ProductList.users.length)
                ? (<div className="alert alert-danger text-center">
                    Sorry, we couldn't find a user with that name
                    </div>)
                : ''
            }
        </div>
    )
}

export default ProductList