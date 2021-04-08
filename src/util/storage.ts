export function setStorage(name: string, content: string) {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * get localStorage
 */
export function getStorage(name: string) {
    if (!name) return false
    let content = window.localStorage.getItem(name)
    if (content && content !== 'undefined' && content !== 'null') {
        if (content.startsWith('{') || content.startsWith('[')) {
            content = JSON.parse(content)
        }
    } else {
        content = null
    }
    return content
}

/**
 * delete localStorage
 */
export function removeStorage(name: string) {
    if (!name) return
    window.localStorage.removeItem(name)
}

/*
 * set sessionStorage
 */
export function setSessionStorage(name: string, content: any) {
    if (!name) return
    let contentNew
    if (typeof content !== 'string') {
        contentNew = JSON.stringify(content)
    } else {
        contentNew = content
    }
    window.sessionStorage.setItem(name, contentNew)
}
/**
 * get sessionStorage
 */
export function getSessionStorage(name: string) {
    if (!name) return false
    let content = window.sessionStorage.getItem(name)
    if (content && content !== 'undefined' && content !== 'null') {
        if (content.startsWith('{') || content.startsWith('[')) {
            content = JSON.parse(content)
        }
    } else {
        content = null
    }
    return content
}
/**
 * delete localStorage
 */
export function removeSessionStorage(name: string) {
    if (!name) return
    window.sessionStorage.removeItem(name)
}
