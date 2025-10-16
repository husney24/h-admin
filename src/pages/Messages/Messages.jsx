import React, { useState, useRef, useEffect } from 'react';
import {
  FiMessageSquare,
  FiSend,
  FiPaperclip,
  FiImage,
  FiFile,
  FiSmile,
  FiMoreVertical,
  FiSearch,
  FiPhone,
  FiVideo,
  FiInfo,
  FiX,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiArchive,
  FiTrash2,
  FiStar,
  FiDownload,
  FiEdit,
  FiUser,
  FiUsers,
  FiPlus
} from 'react-icons/fi';
import styles from './Messages.module.scss';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatInfo, setShowChatInfo] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'The new design looks amazing! When can we implement it?',
      timestamp: '2 min ago',
      unread: 3,
      online: true,
      type: 'direct',
      role: 'Designer'
    },
    {
      id: 2,
      name: 'Project Alpha Team',
      avatar: 'PA',
      lastMessage: 'John: Meeting scheduled for tomorrow at 10 AM',
      timestamp: '15 min ago',
      unread: 0,
      online: false,
      type: 'group',
      members: 5
    },
    {
      id: 3,
      name: 'Mike Wilson',
      avatar: 'MW',
      lastMessage: 'Can you review the backend code?',
      timestamp: '1 hour ago',
      unread: 1,
      online: true,
      type: 'direct',
      role: 'Developer'
    },
    {
      id: 4,
      name: 'Emily Brown',
      avatar: 'EB',
      lastMessage: 'Thanks for the quick response!',
      timestamp: '3 hours ago',
      unread: 0,
      online: false,
      type: 'direct',
      role: 'Manager'
    },
    {
      id: 5,
      name: 'Development Team',
      avatar: 'DT',
      lastMessage: 'David: Code review completed ✓',
      timestamp: '5 hours ago',
      unread: 0,
      online: false,
      type: 'group',
      members: 8
    },
    {
      id: 6,
      name: 'David Lee',
      avatar: 'DL',
      lastMessage: 'The deployment was successful!',
      timestamp: 'Yesterday',
      unread: 0,
      online: true,
      type: 'direct',
      role: 'DevOps'
    }
  ]);

  const [messages, setMessages] = useState({
    1: [
      {
        id: 1,
        sender: 'Sarah Johnson',
        text: 'Hi! I have some questions about the new project requirements.',
        timestamp: '10:30 AM',
        isMine: false,
        status: 'read'
      },
      {
        id: 2,
        sender: 'You',
        text: 'Sure! What would you like to know?',
        timestamp: '10:32 AM',
        isMine: true,
        status: 'read'
      },
      {
        id: 3,
        sender: 'Sarah Johnson',
        text: 'I was wondering about the design specifications for the dashboard.',
        timestamp: '10:35 AM',
        isMine: false,
        status: 'read'
      },
      {
        id: 4,
        sender: 'You',
        text: 'Let me share the latest mockups with you.',
        timestamp: '10:36 AM',
        isMine: true,
        status: 'read',
        attachment: {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
          name: 'dashboard-mockup.png'
        }
      },
      {
        id: 5,
        sender: 'Sarah Johnson',
        text: 'The new design looks amazing! When can we implement it?',
        timestamp: '10:40 AM',
        isMine: false,
        status: 'read'
      },
      {
        id: 6,
        sender: 'You',
        text: 'We can start next week after finalizing all the details.',
        timestamp: '10:42 AM',
        isMine: true,
        status: 'delivered'
      }
    ],
    3: [
      {
        id: 1,
        sender: 'Mike Wilson',
        text: 'Hey, can you review the backend code?',
        timestamp: '09:15 AM',
        isMine: false,
        status: 'read'
      },
      {
        id: 2,
        sender: 'You',
        text: 'Sure, send me the link.',
        timestamp: '09:20 AM',
        isMine: true,
        status: 'read'
      },
      {
        id: 3,
        sender: 'Mike Wilson',
        text: 'Here it is',
        timestamp: '09:22 AM',
        isMine: false,
        status: 'read',
        attachment: {
          type: 'file',
          name: 'backend-api.zip',
          size: '2.4 MB'
        }
      }
    ]
  });

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim() || !selectedChat) return;

    const newMessage = {
      id: (messages[selectedChat.id]?.length || 0) + 1,
      sender: 'You',
      text: messageText,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isMine: true,
      status: 'sent'
    };

    setMessages({
      ...messages,
      [selectedChat.id]: [...(messages[selectedChat.id] || []), newMessage]
    });

    setConversations(conversations.map(conv =>
      conv.id === selectedChat.id
        ? { ...conv, lastMessage: messageText, timestamp: 'Just now' }
        : conv
    ));

    setMessageText('');
  };

  const handleFileAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && selectedChat) {
      const newMessage = {
        id: (messages[selectedChat.id]?.length || 0) + 1,
        sender: 'You',
        text: 'Sent a file',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isMine: true,
        status: 'sent',
        attachment: {
          type: file.type.startsWith('image/') ? 'image' : 'file',
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
          url: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
        }
      };

      setMessages({
        ...messages,
        [selectedChat.id]: [...(messages[selectedChat.id] || []), newMessage]
      });
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <FiCheck />;
      case 'delivered':
        return <FiCheckCircle />;
      case 'read':
        return <FiCheckCircle className={styles.read} />;
      default:
        return <FiClock />;
    }
  };

  return (
    <div className={styles.messages}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiMessageSquare className={styles.titleIcon} />
            <div>
              <h1>Messages</h1>
              <p>Connect and communicate with your team</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.newChatBtn}>
            <FiPlus /> New Chat
          </button>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        {/* Conversations Sidebar */}
        <div className={styles.conversationsSidebar}>
          <div className={styles.searchBar}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.conversationsList}>
            {filteredConversations.map(conv => (
              <div
                key={conv.id}
                className={`${styles.conversationItem} ${selectedChat?.id === conv.id ? styles.active : ''}`}
                onClick={() => setSelectedChat(conv)}
              >
                <div className={styles.avatar}>
                  {conv.avatar}
                  {conv.online && <div className={styles.onlineIndicator}></div>}
                </div>
                <div className={styles.conversationInfo}>
                  <div className={styles.conversationHeader}>
                    <h4>{conv.name}</h4>
                    <span className={styles.timestamp}>{conv.timestamp}</span>
                  </div>
                  <div className={styles.conversationFooter}>
                    <p className={styles.lastMessage}>{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className={styles.unreadBadge}>{conv.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedChat ? (
          <div className={styles.chatArea}>
            {/* Chat Header */}
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderLeft}>
                <div className={styles.avatar}>
                  {selectedChat.avatar}
                  {selectedChat.online && <div className={styles.onlineIndicator}></div>}
                </div>
                <div className={styles.chatHeaderInfo}>
                  <h3>{selectedChat.name}</h3>
                  <p>
                    {selectedChat.type === 'group'
                      ? `${selectedChat.members} members`
                      : selectedChat.online
                      ? 'Active now'
                      : 'Offline'}
                  </p>
                </div>
              </div>
              <div className={styles.chatHeaderActions}>
                <button className={styles.iconBtn}>
                  <FiPhone />
                </button>
                <button className={styles.iconBtn}>
                  <FiVideo />
                </button>
                <button className={styles.iconBtn} onClick={() => setShowChatInfo(!showChatInfo)}>
                  <FiInfo />
                </button>
                <button className={styles.iconBtn}>
                  <FiMoreVertical />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className={styles.messagesContainer}>
              <div className={styles.messagesList}>
                {(messages[selectedChat.id] || []).map(msg => (
                  <div
                    key={msg.id}
                    className={`${styles.messageWrapper} ${msg.isMine ? styles.mine : ''}`}
                  >
                    {!msg.isMine && (
                      <div className={styles.messageAvatar}>
                        {selectedChat.avatar}
                      </div>
                    )}
                    <div className={styles.messageContent}>
                      {!msg.isMine && <div className={styles.messageSender}>{msg.sender}</div>}
                      {msg.attachment && (
                        <div className={styles.messageAttachment}>
                          {msg.attachment.type === 'image' ? (
                            <div className={styles.imageAttachment}>
                              <img src={msg.attachment.url} alt={msg.attachment.name} />
                              <div className={styles.imageOverlay}>
                                <button className={styles.downloadBtn}>
                                  <FiDownload />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className={styles.fileAttachment}>
                              <div className={styles.fileIcon}>
                                <FiFile />
                              </div>
                              <div className={styles.fileInfo}>
                                <h5>{msg.attachment.name}</h5>
                                <p>{msg.attachment.size}</p>
                              </div>
                              <button className={styles.downloadBtn}>
                                <FiDownload />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                      {msg.text && (
                        <div className={styles.messageBubble}>
                          <p>{msg.text}</p>
                        </div>
                      )}
                      <div className={styles.messageFooter}>
                        <span className={styles.messageTime}>{msg.timestamp}</span>
                        {msg.isMine && (
                          <span className={styles.messageStatus}>
                            {getStatusIcon(msg.status)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Message Input */}
            <form className={styles.messageInput} onSubmit={handleSendMessage}>
              <button type="button" className={styles.attachBtn} onClick={handleFileAttachment}>
                <FiPaperclip />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <button type="button" className={styles.emojiBtn}>
                  <FiSmile />
                </button>
              </div>
              <button type="submit" className={styles.sendBtn} disabled={!messageText.trim()}>
                <FiSend />
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FiMessageSquare />
            <h3>Select a conversation</h3>
            <p>Choose a conversation from the sidebar to start messaging</p>
                      </div>
        )}

        {/* Chat Info Sidebar */}
        {selectedChat && showChatInfo && (
          <div className={styles.chatInfoSidebar}>
            <div className={styles.infoHeader}>
              <h3>Chat Information</h3>
              <button className={styles.closeInfoBtn} onClick={() => setShowChatInfo(false)}>
                <FiX />
              </button>
            </div>

            <div className={styles.infoContent}>
              {/* Profile Section */}
              <div className={styles.infoSection}>
                <div className={styles.profileSection}>
                  <div className={styles.avatarLarge}>
                    {selectedChat.avatar}
                    {selectedChat.online && <div className={styles.onlineIndicator}></div>}
                  </div>
                  <h3>{selectedChat.name}</h3>
                  {selectedChat.type === 'direct' && (
                    <p className={styles.role}>{selectedChat.role}</p>
                  )}
                  {selectedChat.type === 'group' && (
                    <p className={styles.members}>{selectedChat.members} members</p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className={styles.infoSection}>
                <div className={styles.actionsList}>
                  <button className={styles.actionBtn}>
                    <FiPhone />
                    <span>Voice Call</span>
                  </button>
                  <button className={styles.actionBtn}>
                    <FiVideo />
                    <span>Video Call</span>
                  </button>
                  <button className={styles.actionBtn}>
                    <FiSearch />
                    <span>Search in Chat</span>
                  </button>
                </div>
              </div>

              {/* Settings */}
              <div className={styles.infoSection}>
                <h4>Settings</h4>
                <div className={styles.settingsList}>
                  <div className={styles.settingItem}>
                    <FiStar />
                    <span>Add to Favorites</span>
                  </div>
                  <div className={styles.settingItem}>
                    <FiArchive />
                    <span>Archive Chat</span>
                  </div>
                  <div className={`${styles.settingItem} ${styles.danger}`}>
                    <FiTrash2 />
                    <span>Delete Chat</span>
                  </div>
                </div>
              </div>

              {/* Shared Media */}
              <div className={styles.infoSection}>
                <h4>Shared Media</h4>
                <div className={styles.mediaGrid}>
                  <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80" alt="Media" />
                  </div>
                  <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80" alt="Media" />
                  </div>
                  <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" alt="Media" />
                  </div>
                  <div className={styles.mediaItem}>
                    <div className={styles.viewMore}>+5</div>
                  </div>
                </div>
              </div>

              {/* Group Members (if group) */}
              {selectedChat.type === 'group' && (
                <div className={styles.infoSection}>
                  <h4>Members ({selectedChat.members})</h4>
                  <div className={styles.membersList}>
                    <div className={styles.memberItem}>
                      <div className={styles.memberAvatar}>JD</div>
                      <div className={styles.memberInfo}>
                        <h5>John Doe</h5>
                        <p>Admin</p>
                      </div>
                    </div>
                    <div className={styles.memberItem}>
                      <div className={styles.memberAvatar}>SJ</div>
                      <div className={styles.memberInfo}>
                        <h5>Sarah Johnson</h5>
                        <p>Member</p>
                      </div>
                    </div>
                    <div className={styles.memberItem}>
                      <div className={styles.memberAvatar}>MW</div>
                      <div className={styles.memberInfo}>
                        <h5>Mike Wilson</h5>
                        <p>Member</p>
                      </div>
                    </div>
                  </div>
                  <button className={styles.viewAllBtn}>View All Members</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;