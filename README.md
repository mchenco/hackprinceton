#The Word on the Streets

A data visualisation of sentiment analysis from Twitter and Guardian News.

![Sample](sample.jpg?raw=true) 
![Sample2](sample2.jpg?raw=true)

This project was inspired by our team's interest in political/social triggers in the stock market (the US election was around this time). We came up with the idea of a tool that could help quantify these triggers.

The result is a sentiment analysis tool that takes in keywords and a timeframe and outputs a sentiment from [-1, 1],(bad - good) as well as the frequency of the keyword in the databases. We then visualized the datathrough a simple bubble plot, where the radius of the bubble is the frequency of the keyword and the location of the bubble on the x-axis represented the sentiment.

The tool mines Twitter and Guardian News for data and uses natural language processing and Microsoft Cognitive Services to predict the sentiment of topics. The project was written mainly in Python.

We originally wanted to visualize the data by using javascript, d3.js, HTML, CSS and hosting it on a Microsoft Azure cloud, though that fell through at the end because we couldn't get the JSON object to parse.

This was a hackathon project written by myself, dan, and ronak at HackPrinceton Fall 2016, where we placed Top 10!
