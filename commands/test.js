const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command to check if the bot responds."),
  async execute(interaction) {
    await interaction.reply("Bot is working!");
  },
};
