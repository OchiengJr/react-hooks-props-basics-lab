import React from 'react';
import user from '../data/user';

const Links = () => {
    const { links } = user;

    return (
        <div>
            <h3>Links</h3>
            
            {links && (
                <>
                    <a href={links.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <br />
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </>
            )}
        </div>
    );
}

export default Links;

