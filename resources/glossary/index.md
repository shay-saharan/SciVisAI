---
title: Glossary
parent: Resources
nav_order: 2
layout: default
---

# A Glossary of AI Terms

Terms are grouped by theme and listed alphabetically within each group. **In practice** notes flag concepts of special interest to practice, quality, and ethics in scientific and medical visualization.

## Foundations & Core Concepts

- **Algorithm** — A precise set of step-by-step instructions for solving a problem. In AI, algorithms are the “recipes” that turn inputs into outputs.
- **Artificial Intelligence (AI)** — The broad field of building systems that perform tasks normally associated with human intelligence, such as recognizing, reasoning, creating, and deciding. In practice, “AI” today usually means a type of machine learning.
- **Context window** — The amount of text or information a model can “see” and work with at once. A larger window lets the model hold more background before it forgets early details.
- **Data / Dataset** — The raw material AI learns from: text, images, measurements, or other examples. In medical illustration, this might be anatomical atlases, labeled images, or patient scans. **In practice:** Data quality and diversity largely determine what a model can do—and what it can get wrong.
- **Deep Learning** — A subfield of machine learning that uses many-layered neural networks to learn complex patterns directly from data, without hand-crafted rules. It powers modern image and language models.
- **Inference** — Using a trained model to make a prediction or generate an output, as opposed to training it. This is the step that happens when you submit a prompt to a model.
- **Machine Learning (ML)** — A type of AI where a system learns patterns from examples rather than following fixed rules. The more examples it sees, the better it usually gets.
- **Model** — The finished, trained artifact that does the work: a set of learned parameters that takes input and produces output.
- **Multimodal AI** — A model that handles more than one type of input at once—text, images, and sometimes 3D or video—and can connect them. **In practice:** This is the basis of text-to-image and image-to-text tools used in illustration.
- **Neural Network** — A computing structure loosely inspired by the brain, made of connected layers of simple “neurons” that adjust their connections as they learn. The workhorse of deep learning.
- **Token** — The unit a language model reads and writes: roughly three-quarters of a word. A 1,000-word prompt is about 1,300 tokens. Token limits shape how much a model can process at once.
- **Training** — The process of exposing a model to many examples so it adjusts its internal parameters to perform a task well. **In practice:** LLMs and illustration tools are pre-trained on broad internet data; targeted training on accurate, approved data may be needed for safe use.

## Models & Architectures

- **Attention mechanism** — A technique that lets a model focus on the most relevant parts of its input, weighing some parts more than others. It is the key idea inside transformers.
- **CLIP (Contrastive Language-Image Pre-training)** — A model that learns to match images and text. It underpins much of modern image search and prompt-to-image control.
- **Convolutional Neural Network (CNN)** — A neural network architecture especially good at processing images by scanning them for local patterns. A foundation of medical image analysis.
- **Diffusion model** — A generative model that creates images by starting from random noise and gradually denoising it into a clear picture. **In practice:** The technology behind leading text-to-image and image-to-image tools such as Stable Diffusion, DALL·E, and Midjourney.
- **Fine-tuning** — Taking a pre-trained model and continuing to train it on a specific, smaller dataset to specialize it. **In practice:** A potential route to a model that reliably produces correct, consistent output.
- **GAN (Generative Adversarial Network)** — A generative model built from two networks in competition: one creates images, the other judges them, pushing toward realism. Central to early generative art and image synthesis.
- **Gaussian Splats** — A volumetric reconstruction and rendering technique where a scene is represented by millions of Gaussians: overlapping, fuzzy 3D ellipsoidal blobs. For a similar technology, see Neural Radiance Field (NeRF).
- **Large Language Model (LLM)** — A very large language model trained on vast amounts of text, able to understand and generate natural language (GPT, Claude, Llama). **In practice:** LLMs draft captions, labels, and descriptions but can hallucinate clinical facts—always verify.
- **Neural Radiance Field (NeRF)** — A technique that turns a set of 2D photos of an object into a detailed, navigable 3D representation. **In practice:** Relevant to turning photographs or scans of specimens and structures into explorable 3D models for teaching. For a similar technology, see Gaussian Splats.
- **Transformer** — The dominant architecture behind modern AI. It processes whole inputs at once using the attention mechanism, handling long sequences and rich context efficiently. Nearly every current language and image model is built on it.
- **Vision-Language Model (VLM)** — A model that understands both images and text together, able to describe an image, answer questions about it, or follow instructions referencing it. **In practice:** Part of “look at this illustration and check it for accuracy” workflows.

## Generative & Image Models

- **Data augmentation** — Artificially expanding a training set by transforming existing examples, such as flipping, rotating, or recoloring them. **In practice:** This helps models generalize, but can be a source of inaccuracy in areas such as anatomy and molecular biology.
- **Image-to-image** — Generating a new image from an input image, guided by a prompt and, optionally, a mask. **In practice:** A common way to re-render, restyle, or complete existing work.
- **Inpainting** — Filling in or replacing a masked region of an image. **In practice:** Useful for extending a scene, adding a label, or removing an artifact—but the generated region may be invented and inaccurate.
- **Outpainting** — Extending an image beyond its original borders by generating new surrounding content. **In practice:** Useful for enlarging a frame, but new edge areas are AI-generated and unverified.
- **Prompt / Prompt engineering** — A prompt is the text (and sometimes image) instruction you give a generative model. Prompt engineering is the craft of writing it so the output is reliable. **In practice:** A core skill for creators working with generative tools.
- **Super-resolution / Upscaling** — Increasing an image’s resolution, often by generating detail. **In practice:** Upscaling can add plausible-looking but false detail, which is dangerous in clinical figures.
- **Synthetic data** — Data created by a model rather than measured or photographed. **In practice:** It can fill gaps for rare conditions, but also risks “teaching the model to itself” and propagating errors.
- **Text-to-image** — Generating an image from a text description. This is the signature capability of generative illustration tools.
- **Style transfer** — Applying the visual style of one image to the content of another. It allows an AI user to match a style while keeping content under human control.

## Training, Optimization & Data

- **Bias (and Fairness)** — Systematic error that makes a model perform worse for some groups or contexts than others, often inherited from skewed training data. **In practice:** A model trained on few or non-representative anatomical or patient examples can misrepresent bodies, conditions, or demographics. Fairness is the goal of reducing such bias.
- **Epoch** — One full pass of the training data through a model. Models are trained for many epochs.
- **Gradient descent** — The standard method for training: the model repeatedly nudges its parameters to reduce its error. The engine behind “learning.”
- **Overfitting** — When a model memorizes its training examples instead of learning the general pattern, so it fails on new cases. **In practice:** A model that memorizes existing examples may not generalize to new contexts, applications, or discoveries.
- **Reinforcement Learning (RL)** — A training approach where a model learns by trial and error, receiving rewards for good outcomes and penalties for bad ones.
- **RLHF (Reinforcement Learning from Human Feedback)** — A popular way to steer a language model: humans rank outputs, and the model is trained via reinforcement learning to prefer the better ones. **In practice:** This is how “helpful, safe, on-style” behavior is shaped into a model.
- **Underfitting** — The opposite of overfitting: the model is too simple to capture the pattern, so it performs poorly even on training data.
- **Weights** — The internal numbers of a trained model that encode what it learned: the model’s “knowledge.” Essentially, a huge multidimensional matrix of vectors.

## Agents, Retrieval & Reasoning

- **AI Agent / Agentic AI** — A system that doesn’t just answer a prompt but plans and acts toward a goal: breaking a task into steps, using tools, and looping until it is done. **In practice:** An agent might search for reference images, cross-check them against vetted sources, revise the list, and flag uncertainties. Each step can introduce errors that need human sign-off.
- **Chain-of-thought** — Asking a model to show its reasoning step by step before answering. This can improve accuracy on complex tasks, but the “reasoning” can look convincing while being wrong.
- **Embedding** — A numerical “fingerprint” of a piece of text or image that captures its meaning, so similar items end up close together. It enables search and matching. **In practice:** Embeddings are the basis of semantic search across an archive.
- **Function calling / Tool use** — Allowing a model to call external functions, such as a database, measurement tool, or rendering engine, as part of its work. **In practice:** This can help an agent reach authoritative, verifiable sources instead of inventing facts.
- **RAG (Retrieval-Augmented Generation)** — A technique where a model looks up relevant information from a trusted source before answering and cites it. **In practice:** Pointing a model to verified sources, guidelines, or approved references can help reduce hallucinations.

## Evaluation, Safety & Trust

- **Benchmark** — A standard test set used to measure how well a model performs. **In practice:** Benchmarks can reward speed over correctness, so it is worth knowing their testing criteria.
- **Black box** — A model whose internal decision-making is hard to interpret. Most current AI systems are effectively black boxes. **In practice:** If we cannot explain why a figure was produced, it is hard to trust or defend it scientifically.
- **Hallucination** — When a model confidently produces information that is false or fabricated. **In practice:** This is a major accuracy risk in medical illustration: invented structures, labels, or measurements can look plausible.
- **Interpretability / Explainability** — The degree to which we can understand and explain a model’s decisions. It is the opposite of a black box. Interpretability is a major area of research in AI. **In practice:** It is essential for clinical trust and auditing generated output.
- **Provenance / Content Credentials (e.g., C2PA)** — A record of how a piece of content was created or modified. **In practice:** Provenance can help show that a figure was AI-assisted, what was changed, and that it passed human review.
- **Prompt injection** — An attack where hidden text in data or an image tricks a model into ignoring its instructions. **In practice:** This can be a security risk when models ingest patient records, trade secrets, or other non-public information.
- **Robustness** — How well a model holds up under unexpected or slightly altered inputs. A robust model will not produce wildly different, incorrect output from a small change in input parameters.
- **Watermarking** — Embedding a detectable signal in AI-generated content to flag it as such. SynthID is one such standard. **In practice:** Watermarks can help illustrators, audiences, and journals detect synthetic figures.

## Ethics, Law & Regulation

- **Copyright** — Legal protection for original creative works, designed to encourage new works and prevent unconsented copying. **In practice:** Central questions include who owns an AI-assisted illustration and whether an AI-generated image can be copyrighted. Laws currently favor human authorship, but can vary by jurisdiction. Copyright is also implicated in the unauthorized use of protected works in AI training data, and the regulatory landscape may change as cases are decided and new legislation is proposed.
- **Data licensing / Training data** — The legal and ethical status of the data a model was trained on. **In practice:** Using existing media—artwork, writing, audio, or video—without proper licensing raises consent and ownership issues.
- **De-identification** — Removing or masking information that could identify a patient. **In practice:** This is required before any patient image is used in training or shown publicly.
- **FDA / Regulatory oversight (AI/ML-based Software as a Medical Device, SaMD)** — In many regions, AI tools for diagnosis or treatment are regulated as medical devices requiring validation, approval, and monitoring. Illustration tools are usually not regulated as devices, but those that touch clinical decision-making may be; this is a boundary worth understanding.
- **HIPAA (US), FIPPA, PIPEDA, Privacy Act (Canada)** — Laws protecting patient health information privacy. **In practice:** These govern how patient images and data may be handled, stored, and shared—including with cloud AI services.
- **Informed consent** — A person’s agreement, based on understanding, to participate. **In practice:** Consent is required before a patient’s image or data is used in illustration or training.
- **Intellectual Property (IP)** — Legal ownership of creations and inventions, including copyright, patents, trademarks, and trade secrets. **In practice:** A key question for the field is whether an illustrator who prompts and reviews a figure owns it as much as one who draws it by hand. This affects authorship, credit, and commercial rights.

## Domain-Specific to Medical Illustration

- **Anatomical accuracy / Fidelity** — Correctness of structure, proportion, and relationships in a figure. **In practice:** This is a non-negotiable standard; an AI figure that is beautiful but scientifically wrong is worse than none.
- **Ground truth** — An accepted, correct reference, such as a verified labeled image, used to measure how accurate a model is. It is the yardstick every generated figure should be checked against.
- **Segmentation** — Separating an image into meaningful regions, such as isolating the liver from surrounding tissue. AI tools for automating segmentation have proliferated. **In practice:** Segmentation can help isolate and re-render structures, but errors at the borders can misrepresent anatomy.
- **Validation** — Checking a model or output against held-out data or an expert standard to confirm it works. **In practice:** Expert review, verification, and documentation help turn a “nice image” into a usable figure.
