
function juiceStore(data) {
    let store = new Map()
    let storeBottle = new Map()

    for (let el of data) {
        let [juiceType, quantity] = el.split(' => ')


        if (store.has(juiceType)) {
            store.get(juiceType)

            store.set(juiceType, store.get(juiceType) + Number(quantity))
            if (store.get(juiceType) >= 1000) {
                let bottle = Math.floor(store.get(juiceType) / 1000)

                store.set(juiceType, store.get(juiceType) - (bottle * 1000))
                if (!storeBottle.has(juiceType)) {
                    storeBottle.set(juiceType, Number(bottle))
                } else {
                    storeBottle.set(juiceType, storeBottle.get(juiceType) + Number(bottle))
                }

                continue
            }

        }
        store.set(juiceType, Number(quantity))

        if (store.get(juiceType) >= 1000) {
            let bottle = Math.floor(store.get(juiceType) / 1000)


            store.set(juiceType, store.get(juiceType) - (bottle * 1000))
            storeBottle.set(juiceType, Number(bottle))
        }

    }

    for (const [k, v] of storeBottle) {
        console.log(`${k} => ${v}`);
    }
}
juiceStore(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

)
