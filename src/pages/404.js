import React from 'react'
import Layout from '../components/Layout/Layout'

const NotFound = () => {
    return (
        <div>
            <Layout>
                <section style={{maxHeight: "100vh", overflow: "hidden"}} className="section active">

                    <img style={{maxHeight: "100vh"}} src="/images/404-error.svg" alt="" />
                </section>
            </Layout>
        </div>
    )
}

export default NotFound
