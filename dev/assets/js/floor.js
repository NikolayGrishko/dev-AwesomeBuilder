const flatArray = [
    {
        id: 0,
        house: "15",
        floor: "1",
        flatNumber: 1,
        rooms: "3",
        square: "82.3",
        price: "1100$",
        totalPrice: "90530$",
        flatStatus: "sold",
    },
    {
        id: 1,
        house: "15",
        floor: "1",
        flatNumber: 2,
        rooms: "2",
        square: "60.7",
        price: "1100$",
        totalPrice: "66770$",
        flatStatus: "booked",
    },
    {
        id: 2,
        house: "15",
        floor: "1",
        flatNumber: 3,
        rooms: "2",
        square: "60.7",
        price: "1100$",
        totalPrice: "66770$",
        flatStatus: "sold",
    },
    {
        id: 3,
        house: "15",
        floor: "1",
        flatNumber: 4,
        rooms: "3",
        square: "82.0",
        price: "1100$",
        totalPrice: "90200$",
        flatStatus: "free",
    },
    {
        id: 4,
        house: "15",
        floor: "1",
        flatNumber: 5,
        rooms: "3",
        square: "79.7",
        price: "1100$",
        totalPrice: "90200$",
        flatStatus: "free",
    },
    {
        id: 5,
        house: "15",
        floor: "1",
        flatNumber: 6,
        rooms: "1",
        square: "39.2",
        price: "1100$",
        totalPrice: "43120$",
        flatStatus: 'action',
    },
    {
        id: 6,
        house: "15",
        floor: "1",
        flatNumber: 7,
        rooms: "1",
        square: "42.0",
        price: "1100$",
        totalPrice: "46200$",
        flatStatus: "sold",
    },
    {
        id: 7,
        house: "15",
        floor: "1",
        flatNumber: 8,
        rooms: "1",
        square: "39.2",
        price: "1100$",
        totalPrice: "43120$",
        flatStatus: "free",
    },
    {
        id: 8,
        house: "15",
        floor: "1",
        flatNumber: 9,
        rooms: "3",
        square: "79.3",
        price: "1100$",
        totalPrice: "87230$",
        flatStatus: "sold",
    }
]



const installFloor = () =>{
    const flats = document.querySelectorAll('.flat');
    const flatInfo = document.querySelector('.floor-options');
    const removeActiveClass =()=> flats.forEach(flat=> {
        flat.classList.remove('active');
    })

    const initialValue= [{
        id: 0,
        house: "15",
        floor: "1",
        flatNumber: 1,
        rooms: "3",
        square: "82.3",
        price: "1100$",
        totalPrice: "90530$",
        flatStatus: "sold",
    }]

    const renderInformation = (array) => {
		const flatInformation = array.map(item =>{
			return (`
            <div class="floor-options-item">
                <div>Номер будинку:</div>
                <div>${item.house}</div>
            </div>
            <div class="floor-options-item">
                <div>Поверх:</div>
                <div>${item.floor}</div>
            </div>
            <div class="floor-options-item">
                <div>Номер квартири:</div>
                <div id="flat-number">${item.flatNumber}</div>
            </div>
            <div class="floor-options-item">
                <div>Кіл-сть кімнат:</div>
                <div>${item.rooms}</div>
            </div>
            <div class="floor-options-item">
                <div>Площа квартири, м²:</div>
                <div>${item.square}</div>
            </div>
            <div class="floor-options-item">
                <div>Ціна за м²:</div>
                <div>${item.price}</div>
            </div>
            <div class="floor-options-item">
                <div>Вартість квартири:</div>
                <div>${item.totalPrice}</div>
            </div>
            <div class="floor-options-item">
                <div>Статус квартири:</div>
                <div>${item.flatStatus}</div>
            </div> 
            `)
		})
		flatInfo.innerHTML = flatInformation
	}
	renderInformation(initialValue)

	flats.forEach( (flat, index, arr) => {
		flat.addEventListener('click',()=>{
			removeActiveClass();
			flat.classList.add('active')

			const thisFlat = flat.getAttribute('data-flat-number')

			let flatNumber = flatArray.filter(item =>  item.flatNumber ===  Number(thisFlat) )

			renderInformation(flatNumber)
		})
    })
}



document.querySelector('.floor-item-page') ? installFloor() : undefined