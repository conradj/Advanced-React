const mutations = {
  async createItem(parent, args, ctx, info) {
    // check they are logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  }
  //   createDog(parent, args, ctx, info) {
  //     console.log(args);
  //   }
};

module.exports = mutations;
