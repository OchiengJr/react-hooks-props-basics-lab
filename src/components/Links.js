import React from 'react';
import PropTypes from 'prop-types';
import user from '../data/user';

const Links = ({ links }) => {
    if (!links || !links.github || !links.linkedin) {
        // Handle missing or incomplete links object
        return (
            <div>
                <h3>Links</h3>
                <p>Links are not available</p>
            </div>
        );
    }

    return (
        <div>
            <h3>Links</h3>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <br />
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>
    );
}

Links.propTypes = {
    links: PropTypes.shape({
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired
    })
};

// Using user data as a fallback if links prop is not provided
Links.defaultProps = {
    links: user.links || {}
};

export default Links;
