import { Writable, writable } from 'svelte/store'

export const toastState : Writable<{
    active: boolean,
    message: string | undefined,
    type: "success" | "error" | "warning" | undefined
}> = writable({active: false, message: undefined, type: undefined})