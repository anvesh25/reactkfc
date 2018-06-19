import {Dispatcher} from 'flux';

interface IAction {
    type:string,
    payload: string
}

export default new Dispatcher<IAction>();