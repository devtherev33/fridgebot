const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Generate a random number within a range.")
    .addIntegerOption((option) =>
      option.setName("min").setDescription("Minimum number").setRequired(true)
    )
    .addIntegerOption((option) =>
      option.setName("max").setDescription("Maximum number").setRequired(true)
    ),
  async execute(interaction) {
    const min = interaction.options.getInteger("min");
    const max = interaction.options.getInteger("max");
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    await interaction.reply(
      `Random number between ${min} and ${max}: ${randomNum}`
    );
  },
};
