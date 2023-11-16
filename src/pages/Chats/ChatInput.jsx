import React from 'react';

const ChatInput = ({ handelSubmit }) => {
    return (
        <div>
            <div class="flex flex-row items-center bg-white pt-5 pb-2 bottom-0 w-full">
                <form onSubmit={handelSubmit}
                    class="ml-2 flex flex-row border-gray items-center w-full border rounded-3xl h-12 px-2"
                >
                    <button
                        class="focus:outline-none flex items-center justify-center h-10 w-10 hover:text-red-600 text-red-400 ml-1"
                    >
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            ></path>
                        </svg>
                    </button>
                    <div class="w-full">
                        <input
                            name='text'
                            type="text"
                            id="message"
                            class="border rounded-2xl border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                            placeholder="Type your message...."
                        />
                    </div>
                    <div class="flex flex-row">
                        <button class="focus:outline-none flex items-center justify-center h-10 w-8 hover:text-blue-600  text-blue-400">
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                        </button>
                        <button type='submit'
                            id="capture"
                            class="focus:outline-none flex items-center justify-center h-10 w-8 hover:text-green-600 text-green-400 ml-1 mr-2"
                        >
                            <svg
                                class="w-5 h-5 transform rotate-90 -mr-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default ChatInput;