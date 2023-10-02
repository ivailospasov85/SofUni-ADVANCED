function colorize() {

    let names = document.getElementsByTagName('tr')

    namesArr = Array.from(names)
    namesArr.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';

        }
    });

}