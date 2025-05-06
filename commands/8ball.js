const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask a yes/no question and the 8-ball will answer!")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("Ask a question")
        .setRequired(true)
    ),
  async execute(interaction) {
    const responses = [
      "Yes.",
      "No.",
      "Maybe.",
      "Ask again later.",
      "I cannot say.",
      "Definitely not.",
    ];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    const question = interaction.options.getString("question");
    await interaction.reply(
      `🎱 Question: ${question}\nAnswer: ${randomResponse}`
    );
  },
};
