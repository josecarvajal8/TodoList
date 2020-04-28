import React from 'react'
import { NavBar, Input } from '../common'
export default function Home() {
    const [searchValue, onChangeSearchValue] = React.useState('')
    return (
        <>
            <NavBar title={'My List'} />
            <Input value={searchValue} onChange={onChangeSearchValue} placeHolder={'Search'} />
        </>
    )
}