import { applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import sagaMiddleware from "./middleware/sagaMiddleware";

const rootMiddleware = applyMiddleware(
    createLogger(), 
    thunk, 
    sagaMiddleware
)

export default rootMiddleware