import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  header,
  backgroundImage,
  main
} from './layout.module.css'
const Layout = ({ pageTitle, children }) => {
	return (
		<div className={container}>
    <StaticImage className={backgroundImage}
          alt='Outdoors Background'
          src='../images/mountains-background.png'
          layout="fullWidth"
      />
			<title>{pageTitle}</title>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/adventures" className={navLinkText}>
						Adventures
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/fitness" className={navLinkText}>
						Fitness
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/apparel" className={navLinkText}>
						Apparel
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
				</ul>
			</nav>
			<main className={main}>
				<h1 className={heading}>{pageTitle}</h1>
        <div>
				    {children}
        </div>
			</main>
		</div>
	)
}

export default Layout
