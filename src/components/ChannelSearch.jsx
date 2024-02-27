import React, { useState, useEffect } from 'react';
import { getChannel, useChatContext } from 'stream-chat-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ChannelSearch = () => {

    const [query, setQuery] = useState('')
    const [Loading, setLoading] = useState('false'); //this component is not in a loading state

    const getChannels = async(text) => {
try {
    //TODO: fetch channels
} catch (error) {
    setQuery('')
}
    }

    const onSearch =(event)=>{
        event.preventDefault();//This prevents the automatic reload of the page that would normally happen when submitting a form
        setLoading(true)
        setQuery(event.target.value)
        getChannels(event.target.value)
    }
    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channel-search__input__icon'>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <input type="text"
                    className='channel-search__input__text'
                    placeholder='Search'
                    value={ query} 
                    onChange={onSearch}/>
                    
            </div>

        </div>
    );
}

export default ChannelSearch;
