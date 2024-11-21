/**
 * plugins/pinia
 *
 * Used to store state for this app. We use persisted state so the state remains even after called once,
 * and encrypt it before storing it in local storage with secure ls library
 */

import {createPinia} from "pinia";
import {createPersistedState} from "pinia-plugin-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({
    isCompression: false
});

const pinia = createPinia();
pinia.use(
    createPersistedState({
        storage: {
            getItem: (key: string) => ls.get(key),
            setItem: (key: string, value: string) => ls.set(key, value)
        },
    })
)

export default pinia;
