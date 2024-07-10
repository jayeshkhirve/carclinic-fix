'use client'

const { default: store } = require("@/src/store/store")
const { Provider } = require("react-redux")

const ReduxProviderWrapper = ({children}) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}

export default ReduxProviderWrapper;