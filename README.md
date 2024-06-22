# Task Management Application


**Installation and Running Instructions** 

**Prerequisites**

1. **Node.js**: You need to have Node.js installed on your machine. You can download it from the official Node.js website.
2. **npm**: You need to have npm (Node Package Manager) installed on your machine. npm comes bundled with Node.js.
3. **MySQL**: You need to have MySQL installed on your machine. You can download it from the official MySQL website.

## Installation

1. **Clone the Repository**: Clone the repository from GitHub using the following command:

<pre class="not-prose w-full overflow-hidden rounded font-mono text-sm font-extralight"><div class="codeWrapper text-textMainDark selection:!text-superDark selection:bg-superDuper/10 relative"><div class="absolute">bash</div><div class="sc-gEvEer bMfiHw"><span><code><span class="token">git</span> clone https://github.com/your-username/task-management-system.git
</code></span><button type="button" class="sc-aXZVg giNMON"><svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#c5c8c6"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg></button></div></div></pre>

2. **Install Dependencies**: Navigate to the project directory and install the dependencies using npm:

<pre class="not-prose w-full overflow-hidden rounded font-mono text-sm font-extralight"><div class="codeWrapper text-textMainDark selection:!text-superDark selection:bg-superDuper/10 relative"><div class="absolute">bash</div><div class="sc-gEvEer bMfiHw"><span><code><span class="token">cd</span> task-management-system
<span class="token">npm</span> <span class="token">install</span>
</code></span><button type="button" class="sc-aXZVg giNMON"><svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#c5c8c6"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg></button></div></div></pre>

3. **Create Database**: Create a new MySQL database and update the `config.js` file with the database credentials.

## Running the Project

1. **Start the Server**: Start the server by running the following command:

<pre class="not-prose w-full overflow-hidden rounded font-mono text-sm font-extralight"><div class="codeWrapper text-textMainDark selection:!text-superDark selection:bg-superDuper/10 relative"><div class="absolute">bash</div><div class="sc-gEvEer bMfiHw"><span><code>node server.js
</code></span><button type="button" class="sc-aXZVg giNMON"><svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#c5c8c6"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg></button></div></div></pre>

2. **Run the Client**: Run the client by running the following command:

<pre class="not-prose w-full overflow-hidden rounded font-mono text-sm font-extralight"><div class="codeWrapper text-textMainDark selection:!text-superDark selection:bg-superDuper/10 relative"><div class="absolute">bash</div><div class="sc-gEvEer bMfiHw"><span><code><span class="token">npm</span> start
</code></span><button type="button" class="sc-aXZVg giNMON"><svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#c5c8c6"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg></button></div></div></pre>

3. **Open in Browser**: Open the project in a browser by navigating to `http://localhost:3000` in your browser.

## Running Tests

1. **Run Tests**: Run the tests by running the following command:

<pre class="not-prose w-full overflow-hidden rounded font-mono text-sm font-extralight"><div class="codeWrapper text-textMainDark selection:!text-superDark selection:bg-superDuper/10 relative"><div class="absolute">bash</div><div class="sc-gEvEer bMfiHw"><span><code><span class="token">npm</span> <span class="token">test</span>
</code></span><button type="button" class="sc-aXZVg giNMON"><svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#c5c8c6"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg></button></div></div></pre>

## Troubleshooting

1. **Error Messages**: If you encounter any error messages, please check the console for more details.
2. **Database Issues**: If you encounter any database issues, please check the database configuration in the `config.js` file.

## Contributing

If you would like to contribute to this project, please follow these steps:1. **Fork the Repository**: Fork the repository from GitHub.

1. **Create a Branch**: Create a new branch for your changes.
2. **Make Changes**: Make the necessary changes to the code.
3. **Commit Changes**: Commit your changes.
4. **Push Changes**: Push your changes to your forked repository.
5. **Create a Pull Request**: Create a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. I hope this README file helps you with installing and running the project from scratch. If you have any questions or need further assistance, please feel free to ask.
