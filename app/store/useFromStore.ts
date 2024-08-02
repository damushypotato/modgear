import { useEffect, useState } from 'react';

// This hook is used to get the state from the store and update the component when the state changes.
export default function useFromStore<T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    storeCallback: (state: T) => F
) {
    // State to store the state from the store
    const [state, setState] = useState<F>();

    // Get the state from the store
    const stateOfStore = store(storeCallback) as F;

    // Update the component when the state changes
    useEffect(() => {
        setState(stateOfStore);
    }, [stateOfStore]);

    // Return the state
    if (!state) {
        return stateOfStore;
    }

    return state;
}
