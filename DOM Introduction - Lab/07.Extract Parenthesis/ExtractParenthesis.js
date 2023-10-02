function extract(content) {

    let newContent = document.getElementById('content')

    let pattern = /\(([^(]+)\)/g
    let result = []
    let matches = newContent.textContent.matchAll(pattern)
    for (const match of matches) {
        result.push(match[1])
    }

    return result
}