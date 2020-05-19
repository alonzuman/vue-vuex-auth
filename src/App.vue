<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Home, Navbar },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

:root {
  --border-radius: 1rem;

  --border: 1px solid #00000020;
  --primary: black;
  --secondary: gray;
  --light: white;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button:hover {
  cursor: pointer;
}

.primary-button {
  background-color: var(--primary);
  color: var(--light);
  padding: 8px 16px;
  font-size: 12px;
  border: var(--border);
  border-radius: var(--border-radius);
}

.secondary-button {
  background-color: var(--light);
  color: var(--primary);
  padding: 8px 16px;
  font-size: 12px;
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
