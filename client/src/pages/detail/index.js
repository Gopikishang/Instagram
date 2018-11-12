import React from 'react'
import DynamicList from './components/dynamic-list/index'
import Recommend from './components/recommend/index'
import Nav from '@components/nav/index.js'
import Style from './index.scss'

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Nav />
                <div className="page-container">
                    <div className={Style['home-detail']}>
                        <span className="loading"></span>
                        <DynamicList />
                        <Recommend />
                    </div>
                </div>
            </main>
        )
    }
}

export default Detail