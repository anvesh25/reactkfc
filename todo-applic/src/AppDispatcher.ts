import {Dispatcher} from 'flux';

interface IAction {
    type:string,
    payload: string | number
}

export default new Dispatcher<IAction>();