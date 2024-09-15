import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer>
            <div className='main-footer'> 
                <div className="brand">
                <div className="logo"><a href="#">GRASO</a></div>
                </div>
                <div className="info">
                    <ul>
                        <li><h3>COMMUNITY</h3></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>

                    <ul>
                        <li><h3>LEARN</h3></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Medium</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Articles</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Tokenomics</a></li>
                    </ul>

                    <ul>
                        <li><h3>ABOUT</h3></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Contact</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Careers</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Trademark policy</a></li>
                        <li><a href="https://x.com/SuidenUNN" target="_blank" rel="noopener noreferrer">Media Kit</a></li>
                    </ul>
                </div>
            </div>

            <div className='trademark'><small>Built by Team Suiden</small></div>
        </footer>
  );
};

export default Footer;
