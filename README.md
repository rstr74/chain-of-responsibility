# chain-of-responsibility
Chain of responsibility pattern implementation in puremvc.


##How to run this example

Unzip and cd directory:
```
npm install
node index
```

This is a attempt to implement the Chain-of-Responsibility pattern.
It does not use the classic "Chain" interface but uses a mediator that listens to the "nextInChain" notification.

This mediator listens to:
- NEXT_IN_CHAIN
- CHAIN_RESULT
- CHAIN_DID_NOT_MATCH_REQUEST
- CHAIN_CANCELED
