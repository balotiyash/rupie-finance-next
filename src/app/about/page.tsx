import React from 'react'
import style from './page.module.css'

const page = () => {
	return (
		<main>
			<div className={style.content}>
				{/* Left Section of images */}
				<div className={style.leftSec}>
					{/* <div>
						<img src="/images/about-us/loan.jpg" alt="Loan" className={style.leftBox} />
					</div>

					<div className={style.rightBox}>
						<div >
							<img src="/images/about-us/rupee.jpg" alt="Rupees" className={style.box1} />
						</div>
						<div className={style.box2}>
							<img src="/images/about-us/money.jpg" alt="Money" className={style.box2} />
						</div>

					</div> */}


					<img src="/images/about-us/phoneInHand1.png" alt="Loan" />

				</div>

				{/* Right Section of Content */}
				<div className={style.rightSec}>
					<h1>ABOUT US</h1> <br />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>

			</div>
		</main>
	)
}

export default page