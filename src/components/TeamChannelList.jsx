import React from 'react';

const TeamChannelList = ({ children, error = false, loading, type }) => {
    //Type:This prop represents the type of channel list being rendered. It can have a value of either
    // 'team' or 'direct', which determines the title displayed in the header of the channel list
    //error: This prop is a boolean flag indicating whether an error occurred while fetching data or
    // performing an operation. By default, it is set to false.
    //children: This prop represents the child elements passed to the TeamChannelList component. 
    //It allows you to nest components or content within the TeamChannelList component.
    if (error) {
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    connection error, please wait a moment and try again
                </p>

            </div>
        ) : null
    }

    if (loading) {

        //If the loading prop is true, it renders a loading message. The loading message varies based
        // on the type prop. If the type prop is 'team', it displays "Channels loading...". If the type
        // prop is 'direct', it displays "Messages loading...".
        return (
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>
                    {type === 'team' ? 'Channels' : 'Messages'} loading ...
                </p>

            </div>
        )
    }
    return (

        //If neither the error nor the loading props are true, it renders the channel list header and the child 
        //elements (children) passed to the component.
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title'>
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
//button to add channel//
            </div>
            {children}
        </div>
    );
}

export default TeamChannelList;
