module.exports = {
  apps: [{
    name: "zoeencloud-website",
    script: "npm",
    args: "run dev",
    env: {
      NODE_ENV: "production",
    },
    watch: false
  }]
}