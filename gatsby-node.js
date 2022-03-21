exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  /*   createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: false,
  }) */

  createPage({
    path: "/Layout",
    component: require.resolve("./src/components/Layout/Layout.js"),
    context: {},
    defer: false,
  })
}
