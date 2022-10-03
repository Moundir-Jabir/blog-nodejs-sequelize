const moreBtn = document.getElementById('more-details')
const choiceDetails = document.getElementById('choice-details')
const gnInfo = document.getElementById('gn-ifo')
const alldetails = document.getElementById('all-detalis')

moreBtn.addEventListener('click', () => {
    choiceDetails.classList.add('d-block')
    gnInfo.classList.add('d-none')
    gnInfo.classList.remove('d-block')
    alldetails.classList.remove('d-none')
    alldetails.classList.add('d-block')

}) 

// choice deatils
const allRadios = document.getElementsByName('choice')

allRadios.forEach(radio => {
    radio.addEventListener('click', e => {
        if(e.target.checked) {
            let x = e.target.value
            if (x === 'PLanned Hotels') {
                document.getElementById('daily-details').classList.remove('d-block')
                document.getElementById('daily-details').classList.add('d-none')
                document.getElementById('planned-hotels').classList.add('d-block')
                document.getElementById('galleries').classList.remove('d-block')
                document.getElementById('additional-infos').classList.remove('d-block')
            } else if (x === 'Gallery') {
                document.getElementById('daily-details').classList.remove('d-block')
                document.getElementById('planned-hotels').classList.remove('d-block')
                document.getElementById('galleries').classList.add('d-block')
                document.getElementById('additional-infos').classList.remove('d-block')
            } else if (x === 'Additional Services') {
                document.getElementById('daily-details').classList.remove('d-block')
                document.getElementById('planned-hotels').classList.remove('d-block')
                document.getElementById('galleries').classList.remove('d-block')
                document.getElementById('additional-infos').classList.add('d-block')
            } else {
                document.getElementById('daily-details').classList.add('d-block')
                document.getElementById('planned-hotels').classList.remove('d-block')
                document.getElementById('galleries').classList.remove('d-block')
                document.getElementById('additional-infos').classList.remove('d-block')
            }
        }
    })
})

