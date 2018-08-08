import * as actionTypes from './actioTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

import '../../../mock/headerList'

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
    return(dispatch) => {
        axios.get('/api/headerList').then((res) => {
            const data = res.data
            dispatch(changeList(data.list))
        }).catch(err => {
            console.log(err)
        })
    }
}