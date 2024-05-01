function permutationSort(a) {
    const fact = (n, a = 1) => { return n <= 1 ? a : fact(n - 1, a * n) }
    const isSorted = (a, i = 0) => { return i == a.length ? true : a[i] > a[i + 1] ? false : isSorted(a, ++i) }
    const incrementIndex = (ind) => { for (let [n, i] = [ind.length, ind.length - 1]; true; i--) if (ind[i] == n - i) { ind[i] = 0 } else return ind[i]++ }
    for (let [i, ind] = [0, new Array((a.length - 1 == -1 ? 0 : a.length - 1)).fill(0)]; i < fact(a.length); i++, incrementIndex(ind)) {
        for (let j = 0; j < ind.length; j++) [a[j], a[j + ind[j]]] = [a[j + ind[j]], a[j]]
        if (isSorted(a)) { return i + 1 } else for (let j = ind.length - 1; j >= 0; j--) [a[j], a[j + ind[j]]] = [a[j + ind[j]], a[j]]
    }
}