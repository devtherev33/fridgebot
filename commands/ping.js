const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    try {
      await interaction.reply("Pong!"); // Respond with "Pong!"
    } catch (error) {
      console.error("Error in ping command:", error);
      await interaction.reply({ content: "Failed to reply", ephemeral: true });
    }
  },
};
