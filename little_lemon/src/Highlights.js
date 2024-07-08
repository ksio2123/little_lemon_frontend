import Card from './Card'
import dishImg from './th-1168171847.jpg'

function Highlights() {
    return (
        <section className="highlights">
            <div className="highlights__header">
                <h2 className="highlights__special-h2">Special</h2>
                <button class="button"> On the Menu</button>
            </div>
            <div className='highlights__cards'>
            { [1,2,3].map((val) => {
                return (
                    <Card
                        title="Instant Noodle"
                        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        price="$10.00"
                        bottomText="Order a Delivery"
                        img={dishImg}
                        key={val}
                    />
                )
            })

            }
            </div>
        </section>
    )
}

export default Highlights;