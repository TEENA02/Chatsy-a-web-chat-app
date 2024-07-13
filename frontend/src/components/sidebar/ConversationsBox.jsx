import React from 'react'
import Convo from './Convo'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../../utils/emoji';

const ConversationsBox = () => {
 const {loading,conversations}= useGetConversation();
 console.log("conversation",conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
     {conversations.map((conversation, idx) => (
       <Convo
         key={conversation._id}
         conversation={conversation}
         emoji={getRandomEmoji()}
         lastIdx={idx === conversations.length - 1}
       />
     ))}
  {loading ? <span className='loading loading-spinner mx-auto'></span>: null}
    </div>
  )
}

export default ConversationsBox