const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Tells a random joke!"),
  async execute(interaction) {
    // List of jokes
    const jokes = [
      "Why don’t skeletons fight each other? They don’t have the guts!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I used to play piano by ear, but now I use my hands.",
      "Why don’t oysters donate to charity? Because they are shellfish.",
      "What’s orange and sounds like a parrot? A carrot.",
    ];

    // Pick a random joke from the list
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Send the joke as a reply
    await interaction.reply(randomJoke);
  },
};
