---
aliases:
  - /integrating-renewables-into-the-grid-with-machine-learning.html/
article : true
author: "Antonino DiMaggio"
date: 2020-09-06
description: "The complexities of integrating renewables into the grid are here. Machine learning will be key in helping to make this transition possible."
draft: false
hasmath: false
linktitle: "Integrating Renewables Into The Grid With Machine Learning"
tags:
  - renewable energy
title: "Integrating Renewables Into The Grid With Machine Learning"
---

Renewables, such as solar (photovoltaics) and wind, have reached economies of scale and, in some cases, are already cheaper than more traditional [power plants burning coal and natural gas](https://www.nrel.gov/docs/fy19osti/72842.pdf). To simplify the conversation, I will focus on utility-scale solar without batteries.

Solar has made huge strides over the past decade; with each passing year there are more efficient methods to manufacture and maintain photovoltaic systems. This is all driven by competition. Customers want photovoltaic power for as cheap as possible and providers want to squeeze every kilowatt hour of production out of these systems. This intense competition has driven the price of solar into the [ground](https://ourworldindata.org/cheap-renewables-growth), therefore in an ideal [homo economicus](https://en.wikipedia.org/wiki/Homo_economicus) framed world solar should be everywhere. The challenge that is stopping solar from growing at an even faster rate comes down to simple supply and demand.

<div align="center">
  <img src="images/integrating-renewables-into-the-grid-with-machine-learning/power_costs.png" alt="Power costs">
  Figure. 1: <a href="https://www.nrel.gov/docs/fy19osti/72842.pdf" rel="nofollow">Source</a>
</div>

## Framing The Problem: Supply and Demand
Supply is how much power is being generated. Demand is how much power people want to consume. Now let's abstract away all of the complexities involved in electrical power generation/delivery and state that the utility owns everything. The utility is the “grid” and owns the power plants, transmission lines, substations, etc. Therefore, the utility is the sole agent in generating power, delivering that power, and determining how much supply it needs to meet demand.

Let's say the utility's main goal is to provide the cheapest power possible for its customers while generating a reasonable profit to expand and take care of its employees in the future. In order to  achieve the cheapest electricity price possible renewables have to be thrown into the mix. This is where supply and demand becomes complex.

## Dispatchable vs Non-Dispatchable
A [variable/intermittent energy source](https://en.wikipedia.org/wiki/Variable_renewable_energy) is non-dispatchable since it can not be directly controlled: solar only produces electricity when the sun is shining. [Dispatchable generation](https://en.wikipedia.org/wiki/Dispatchable_generation) is a power source that can be controlled: a natural gas power plant can adjust output “somewhat” easily. The control that fossil-fuel based thermal generation provides is needed and is not going anywhere anytime soon. Therefore, we have to find a way to efficiently integrate large amounts of utility-scale solar capacity into the power generation mix — a couple megawatts is not hard to integrate, a couple gigawatts is. The only way to do this successfully is to find a way to reliably forecast the power output of renewables. If we can forecast the power output of renewables we can determine the minimum base load needed from fossil-fuel/nuclear based thermal generation as well as predict gaps in supply that will need to be filled by peaker plants. If the baseload generation is set too high then we will have to [curtail solar](https://www.nrel.gov/docs/fy14osti/60983.pdf). If we fail miserably to forecast the supply of solar then peakers never turn on and people are left without power. Balancing a grid is extremely difficult, therefore renewable forecasts have to be extremely accurate and grid operators have to know their tolerances for starting up thermal generation. Regardless, accurately forecasting renewable output is a good place to start in order to successfully integrate renewables into the grid. But how exactly do we do that? The answer is to use machine learning.

Figure. 2 is known as the duck curve and is perhaps the best visual to understand the dynamics of supply and demand when renewable resources are added into the power generation mix. <span style="color:blue"> Blue: </span> demand for power, <span style="color:orange"> Orange: </span> demand for dispatchable power (mainly fossil fuels), and <span style="color:grey"> Grey: </span>  supply of solar power. Notice how demand for power is highest in the evening.

<div align="center">
  <img src="/images/integrating-renewables-into-the-grid-with-machine-learning/duck_curve.png" alt="Duck curve">
  Figure. 2: <a href="https://en.wikipedia.org/wiki/Duck_curve" rel="nofollow">The famous duck curve</a>
</div>

## Renewable Energy Forecasting
Remember that we are a utility and our main goal is to predict the amount of power generated by utility-scale solar installations. The main variables that impact the power output of solar are atmospheric conditions and time of year. The good news is that since we are a utility we have access to tons of past solar performance data. We also have access to [widely available](https://nsrdb.nrel.gov/) irradiance and atmospheric data; irradiance is simply how strong the sun is shining.

Machine learning models, such as neural networks, are good at making predictions when trained on a lot of data. We have a lot of data, therefore we should be able to make fairly accurate predictions with a properly trained model. We can then use these predictions to make recommendations to the grid operators. An example recommendation would go something like this:

AI: "The global horizontal irradiance is lower than initially expected today. At 1 PM begin to ramp up power production by a factor of 1.5 at the natural gas power plant to meet demand."

GRID OPERATOR: "I agree with this suggestion. Approve the system's recommendation and schedule a ramp up in production at 1 PM."

The accuracy of variable renewable energy forecasts generally [increases at shorter time intervals](https://www.nrel.gov/docs/fy16osti/65728.pdf) . This is a huge hurdle since these small time frames are often not large enough for grid operators to make actionable decisions. For traditional fossil-fuel based power plants it is not economically viable to quickly ramp up production on short notice, in fact the economics of baseload power plants only work if they are running [all the time](https://www.nrel.gov/docs/fy12osti/53504.pdf) . Therefore, machine learning models have to make accurate predictions at variable time intervals.

## We Are Making Progress
Solar and wind forecasting is a hot area of research with a simple Google search returning a bunch of peer-reviewed articles. Some methods use more traditional statistical models while others use neural networks — the approaches vary widely.

Machine learning based methods require a lot of data and a lot of compute. A notable player emerging in the renewable energy forecasting space is Google's DeepMind who recently explored how [machine learning can boost the value of wind energy](https://deepmind.com/blog/article/machine-learning-can-boost-value-wind-energy) .

Essentially, Google has a couple of renewable energy projects that help to power their data centers. DeepMind took historical turbine data generated from 700 megawatts of capacity in the central United States along with widely available weather forecasts to train a neural network. DeepMind's system was configured to predict the wind power output 36 hours ahead of actual generation. The system also recommends how to make optimal hourly delivery commitments to the power grid a full day in advance. DeepMind claims to have boosted the value of their wind energy by 20%. Therefore, DeepMind has established that renewable energy forecasting on long time scales is not only possible but can increase the value of renewable energy resources.

<div align="center">
  <img src="images/integrating-renewables-into-the-grid-with-machine-learning/deepmind_gif.gif" alt="DeepMind predictions">
  Figure. 3: Animation courtesy of DeepMind
</div>


## Key Takeaways
Renewables are now economically competitive with fossil-fuel based power generation. To integrate renewables into the grid we have to accurately forecast renewable output. To forecast renewable output we can use machine learning. Some of the challenges associated with using machine learning to predict power output is the large amount of data and compute needed to train models that can predict power output at variable time intervals.

<u>Updates</u>

[Update 6/24/2021] - Added details on how forecasting renewable output will impact the operation of traditional fossil-fuel based baseload and peaker power plants. Removed any speak of energy market type. Also made some minor changes to wording.
