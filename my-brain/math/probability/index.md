---
id: "probability"
title: "Probability"
---

Probability is the branch of mathematics that deals with how likely an event is to occur or how likely it is that a proposition is true.

This gives us two clear avenues to pursue with learning probability:

- Probability of future events
- Probability of our own hypotheses

Being able to make intelligent estimations of probability of future events occurring is a crucial element to a data driven organization.

We need tools and frameworks to help us understand how to report probabilistic information in a way that is useful and actionable within our organizations.

Overview:

- Intro Concepts
  - Law of Large Numbers
  - Addition Rule
  - Unions and Intersections
  - Venn Diagrams
- Concepts about Likelihood
  - Bayes Theorem
  - Discrete Probability
  - Random Variables

### Some notation conventions

We're often trying to calculate or express the probability of an event occurring.

`What is the probability that a randomly chosen part from an assembly line is defective?`

We use *P()* to represent the probability of what is inside the parenthesis. So if we say that the *event A* is when we pick up a defective part from the assembly line, then *P(A)* is the probability that *event A* will occur. This notation is flexible and requires some context. *P(A)* don't say what the event is, so sometimes we can see *P( part defective)* to make it clear.

Probability is sometimes expressed as a fraction, decimal, or percentage. The probability of an event is always between 0 and 1, inclusive. If an event is certain to happen, the probability is 1. If an event is certain not to happen, the probability is 0. In business, we often express probabilities as percentages.

#### Complement

Probabilities also have their complement counterpart.

The complement event of A is the event that A does not occur.

For the event A, the complement of A is the event that A does not occur. We denote the complement of A as A'. The probability of the complement of A is 1 minus the probability of A.

*P(A') = 1 - P(A)*

Sometimes we can see the complement expressed as A^c or A~.

The complement can have a set of other events, like: probability of a customer choosing Small as *P(S)*. Then *P(S')* is the probability of a customer choosing Medium *or* Large.

It is often the case that it is actually easier to calculate the complement than the event itself.

#### Multiple events

In real-world situations we often have multiple events that we are interested in. We can combine these events in different ways to calculate the probability of them occurring.

To do this we can use conditional probability, intersection, and union.

If we have two events A and B, the conditional probability of A given B is the probability of A occurring given that B has already occurred. We denote the conditional probability of A given B as P(A|B).

We can read this as "the probability of A given B" or "the probability of A given that B has occurred".

Be careful some events are not dependent on each other.

#### Intersection

The intersection of two events A and B is the event that both A and B occur. We denote the intersection of A and B as A ∩ B.

We can read this as "A and B" or "A intersection B". This is the event that both A and B occur.

This can show us that events are mutually exclusive or not. If two events are mutually exclusive, then the probability of their intersection is 0.

#### Union

The union of two events A and B is the event that either A or B occurs. We denote the union of A and B as A ∪ B.

We have three possibilities for the union of two events:

- Only A occurs
- Only B occurs
- Both A and B occur
