import states from '../data/dataState.json';

export const getStateOptions = () => {
    return states.map((state) => ({
        label: state.name,
        value: state.abbreviation,
    }))
}