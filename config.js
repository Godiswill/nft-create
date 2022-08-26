export default {
  metadata: [
    {
      id: 1,
      name: '背景',
      directory: 'Background',
      required: true,
      rarity_weights: 'random',
    },
    {
      id: 2,
      name: '皮肤',
      directory: 'Skin',
      children: [
        {
          name: '普通',
          directory: 'ordinary',
        },
      ],
      required: true,
      rarity_weights: [
        {
          name: '普通',
          directory: 'ordinary',
        },
      ],
    },
    {
      id: 3,
      name: '脸部',
      directory: 'Face',
      required: true,
      rarity_weights: [
        {
          name: '普通',
          directory: 'ordinary',
        },
      ],
    },
    {
      id: 4,
      name: '眼镜',
      directory: 'Glasses',
      required: true,
      rarity_weights: 'random',
    },
    {
      id: 5,
      name: '王冠',
      directory: 'Crown',
      required: true,
      rarity_weights: null,
    },
  ],
};
