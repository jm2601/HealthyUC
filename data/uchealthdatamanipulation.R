setwd("/Users/jessicaarroyo/Desktop/data")
library(plyr)
dataset <- ldply(list.files(), read.csv, header=TRUE)
View(dataset)
#Making it into a DataFrame
dataset<- data.frame(dataset)
# Changing the calories from char to integer
dataset$Calorie<-as.integer(dataset$Calorie)
# Removing NA
dataset <- dataset[-23,]
dataset[is.na(dataset)] <- 0
#datasetv2<-replace(datasetv2$Meal, datasetv2$Meal==5, 2)
#datasetv2<-replace(datasetv2$Meal, datasetv2$Meal==4, 0)
#datasetv2<-replace(datasetv2$Meal, datasetv2$Meal==3, 1)
dataset$Meal[dataset$Meal==5]<-2
dataset$Meal[dataset$Meal==4]<-0
dataset$Meal[dataset$Meal==3]<-1

# Converting to a dataset to csv
write.csv(dataset, "/Users/jessicaarroyo/Desktop/data/dataset.csv", row.names=FALSE)