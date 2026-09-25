import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowUp, Paperclip, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.scss';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialSuggestions = [
    "💍 Custom Jewellery",
    "✨ Jewellery Repair",
    "💎 Diamond Jewellery",
    "📿 Gold Jewellery",
    "💠 Stone Setting",
    "🎁 Current Offers",
    "📍 Visit Us",
    "💰 Get a Quote"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickReply = (reply) => {
    handleUserMessage(reply);
  };

  const handleUserMessage = (text) => {
    if (!text.trim()) return;

    const newUserMsg = { id: Date.now(), text, sender: 'user', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response processing
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = {
        id: Date.now() + 1,
        text: "Our company name is Hemang Gems FZCO.\n\nWe are a Jewellery Manufacturing & Repairing Specialist based in Dubai, UAE.",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          "What services do you provide?",
          "Do you manufacture custom jewellery?",
          "Where are you located?"
        ]
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    handleUserMessage(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserMessage(inputValue);
    }
  };

  return (
    <div className={styles.chatWidgetWrapper}>
      {/* Floating Action Button & Proactive Message */}
      <AnimatePresence>
        {!isOpen && (
          <div className={styles.floatingWrapper}>
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 2, type: 'spring', stiffness: 200 }}
              className={styles.proactiveMessage}
              onClick={toggleChat}
            >
              Ask me anything! ✨
            </motion.div>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className={styles.floatingBtn}
              onClick={toggleChat}
            >
              <div className={styles.aiOrbSmall}></div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Main Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={styles.chatContainer}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.aiOrbMicro}></div>
                <div className={styles.headerTitles}>
                  <h3>Hemang Gems AI</h3>
                  <span>Jewellery Expert</span>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={toggleChat}>
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className={styles.contentArea}>

              {/* Empty State / Welcome Screen */}
              {messages.length === 0 && (
                <div className={styles.welcomeScreen}>
                  <div className={styles.aiOrbLarge}></div>
                  <h2>How can I help you today?</h2>
                  <p>Ask anything about jewellery manufacturing, repair, custom orders or pricing.</p>

                  <div className={styles.suggestionGrid}>
                    {initialSuggestions.map((suggestion, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={styles.suggestionCard}
                        onClick={() => handleQuickReply(suggestion)}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.length > 0 && (
                <div className={styles.messageList}>
                  {messages.map((msg) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={msg.id}
                      className={`${styles.messageRow} ${styles[msg.sender]}`}
                    >
                      <div className={styles.messageBubble}>
                        <div className={styles.messageText}>{msg.text}</div>
                        <span className={styles.timestamp}>{msg.timestamp}</span>
                      </div>

                      {msg.suggestions && msg.suggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className={styles.followUpSuggestions}
                        >
                          <p className={styles.suggestionTitle}>You may also ask</p>
                          <div className={styles.followUpChips}>
                            {msg.suggestions.map((suggestion, idx) => (
                              <button
                                key={idx}
                                className={styles.chip}
                                onClick={() => handleQuickReply(suggestion)}
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${styles.messageRow} ${styles.ai}`}
                    >
                      <div className={styles.typingIndicator}>
                        <div className={styles.aiOrbSmall}></div>
                        <span>Thinking...</span>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className={styles.inputWrapper}>
              <form className={styles.inputForm} onSubmit={handleSendMessage}>
                <button type="button" className={styles.attachmentBtn}>
                  <Paperclip size={18} />
                </button>
                <textarea
                  placeholder="Ask about jewellery..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={styles.sendBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={18} />
                </motion.button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
