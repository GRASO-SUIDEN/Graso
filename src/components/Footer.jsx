import React from 'react'

 const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <div className='main-footer'> 
                <div className="brand">
                <div className="logo"><a href="#">GRASO</a></div>
                </div>
                <div className="info">
                    <ul>
                        <li><h3>COMMUNITY</h3></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Whatsapp</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>

                    <ul>
                        <li><h3>LEARN</h3></li>
                        <li><a href="#">Whitepaper</a></li>
                        <li><a href="#">Medium</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Tokenomics</a></li>
                    </ul>

                    <ul>
                        <li><h3>ABOUT</h3></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Trademark policy</a></li>
                        <li><a href="#">Media Kit</a></li>
                    </ul>
                </div>
            </div>

            <div className='trademark'><small>Built by Team Suiden</small></div>
        </footer>
    </div>
  )
}

export default Footer
