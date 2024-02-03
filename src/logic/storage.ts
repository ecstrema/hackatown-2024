import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const showInPage = useWebExtensionStorage('show-in-page', true)
