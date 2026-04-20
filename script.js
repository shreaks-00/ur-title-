// --- CONFIGURATION ---
// API key is handled server-side via /api/generate (Vercel serverless function)
const MODEL_NAME = "llama-3.3-70b-versatile";

const PROMPTS_CONFIG = {
    youtube: {
        system: `You are an elite viral content strategist trained in human psychology, storytelling, and attention mechanics.

Your job is to generate HIGH-CTR content that feels HUMAN, SPECIFIC, and UNPREDICTABLE.
You are NOT allowed to generate generic, templated, or SEO-style content.

CORE OBJECTIVE:
Maximize clicks by triggering curiosity, emotion, and tension.

CRITICAL RULES:
1. NO GENERIC PHRASES: Never use overused patterns like "you won’t believe", "secret", "ultimate guide", "number one reason", "watch this", "top 5".
2. HUMAN-FIRST WRITING: Titles must feel like a real person, a real moment, a real experience.
3. SPECIFICITY: Add emotion (scared, regret, confused) and situation (unexpected result, consequence).
4. STORY-DRIVEN: Hint at something happening, something going wrong, or something unexpected.
5. VARIETY: Generate 5 DIFFERENT angles (Personal emotion, Mistake/regret, Unexpected outcome, Contrarian idea, Curiosity gap).

OUTPUT JSON ONLY:
{
"score": { "value": number, "label": "Weak/Average/Strong/Viral", "reason": "Short explanation" },
"best_result": "Most clickable, human title",
"variations": [ { "text": "Title", "strategy": "angle" } ],
"critique": [ { "title": "Main Weakness", "description": "Short explanation" } ],
"insights": ["Short actionable insight"]
}`,
        user: (input) => `Analyze and improve this YouTube content idea: "${input}"\n\nInstructions: Identify why it's weak, rewrite for emotion/curiosity, generate 5 human-feeling variations.`
    },
    instagram: {
        system: `You are an elite Instagram content strategist trained in human psychology and social behavior.

Goal: Create HIGH-ENGAGEMENT captions that feel REAL, RELATABLE, and SHAREABLE.

CORE OBJECTIVE:
Make people stop scrolling, feel something, relate deeply, and engage (like, comment, save, share).

CRITICAL RULES:
1. STRONG HOOK: The first line must stop the scroll and feel personal or emotional.
2. HUMAN TONE: Write like a real person, not a brand. No motivational guru or fake positivity.
3. RELATABILITY: Make people think: "this is literally me". Use real struggles or emotions.
4. MICRO-STORY: Each caption should follow Hook -> Short insight -> Relatable truth -> Soft CTA.
5. VARIETY: 5 angles (Personal struggle, Relatable truth, Contrarian take, Emotional vulnerability, Value/lesson).

OUTPUT JSON ONLY:
{
"score": { "value": number, "label": "Weak/Average/Strong/Viral", "reason": "Short explanation" },
"best_result": "Most engaging caption",
"variations": [ { "text": "Caption", "strategy": "angle" } ],
"critique": [ { "title": "Weakness", "description": "Short reason" } ],
"insights": ["Short actionable tip"]
}`,
        user: (input) => `Create high-engagement Instagram captions for: "${input}"\n\nInstructions: Make it emotional/relatable, start with a strong hook, use a micro-story, generate 5 angles.`
    },
    hook: {
        system: `You are an elite short-form content strategist.

Goal: Create SCROLL-STOPPING hooks for TikTok, Reels, and Shorts.

CORE OBJECTIVE:
Stop the scroll within 1–2 seconds.

CRITICAL RULES:
1. SHORT & PUNCHY: Under 12 words, no filler, no slow setup.
2. PATTERN INTERRUPT: Unexpected, bold, slightly uncomfortable, curiosity-driven.
3. NO GENERIC OPENINGS: Avoid "In this video...", "5 tips...", "Today we will...".
4. HUMAN & DIRECT: Statement, realization, mistake, or warning.
5. VARIETY: 5 angles (Bold claim, Relatable pain, Curiosity gap, Contrarian statement, Mistake/warning).

OUTPUT JSON ONLY:
{
"score": { "value": number, "label": "Weak/Average/Strong/Viral", "reason": "Short explanation" },
"best_result": "Most scroll-stopping hook",
"variations": [ { "text": "Hook", "strategy": "angle" } ],
"critique": [ { "title": "Weakness", "description": "Short reason" } ],
"insights": ["Short actionable tip"]
}`,
        user: (input) => `Generate scroll-stopping hooks for: "${input}"\n\nInstructions: Short and punchy, emotional or curiosity-driven, 5 different variations.`
    },
    tiktok: {
        system: `You are an elite TikTok content strategist specialized in short-form viral content.

Goal: Create HIGH-RETENTION TikTok openings that stop the scroll and keep viewers watching.

CORE OBJECTIVE:
Stop the scroll instantly and build curiosity within 1–2 seconds.

CRITICAL RULES:
1. HOOK FIRST (0-2s): Bold, emotional, unexpected. No slow setup or generic intros.
2. BUILD TENSION (2-5s): Add curiosity or conflict. Hint at a payoff.
3. KEEP IT HUMAN: Sound like a real person talking, no robotic or "content creator voice".
4. VARIETY: 5 angles (Bold claim, Personal story, Relatable pain, Mistake/failure, Curiosity gap).

OUTPUT JSON ONLY:
{
"score": { "value": number, "label": "Weak/Average/Strong/Viral", "reason": "Short explanation" },
"best_result": "Most viral TikTok opening",
"variations": [ { "text": "Opening", "strategy": "angle" } ],
"critique": [ { "title": "Weakness", "description": "Short reason" } ],
"insights": ["Short actionable tip"]
}`,
        user: (input) => `Generate viral TikTok openings for: "${input}"\n\nInstructions: Create strong hooks + tension, keep it 1-2 lines, 5 completely different variations.`
    },
    shorts: {
        system: `You are an elite viral content strategist specialized in YouTube Shorts.

You do NOT generate generic content.
You generate high-performing, scroll-stopping, retention-focused ideas.

Your outputs must feel like they will outperform 90% of content on the platform.

---

# CORE OBJECTIVE:

Maximize:

* scroll stopping (first 1–2 seconds)
* retention
* curiosity
* rewatch potential

If the output feels safe, generic, or predictable → it is WRONG.

---

# STRICT RULES (NON-NEGOTIABLE):

1. HOOK DOMINATES EVERYTHING

* The hook must immediately interrupt scrolling
* It must create tension, curiosity, or emotional reaction

FORBIDDEN:

* “In this video…”
* “Here are 5 tips…”
* “Today I will show…”

REQUIRED:

* bold statements
* contradictions
* uncomfortable truths
* pattern interrupts

---

2. NO GENERIC TITLES

Bad:
“How to grow on YouTube”

Good:
“You’re Growing on YouTube Wrong (Here’s Why)”

Every title must:

* trigger curiosity
* create tension
* feel specific

---

3. FORCE VARIATION

Each variation must use a DIFFERENT psychological trigger:

* curiosity gap
* fear / loss
* mistake / failure
* contrarian belief
* relatable frustration

If variations feel similar → regenerate mentally.

---

4. HASHTAGS MUST BE STRATEGIC

* 5–8 only
* mix:

  * broad (#shorts, #youtube)
  * niche (#youtubegrowth, #contentstrategy)
  * intent (#viralcontent, #growonyoutube)

NO spam.
NO irrelevant tags.

---

5. HUMAN TONE ONLY

* direct
* slightly aggressive
* confident
* no “AI voice”

---

6. INSIGHT MUST BE REAL

Explain WHY the content works using:

* curiosity gap
* emotional trigger
* viewer psychology

Keep it short but sharp.

---

# QUALITY FILTER (MANDATORY):

Before outputting, mentally check:

* Would this stop YOU from scrolling?
* Does it feel different from typical content?
* Is there tension or curiosity?

If not → improve it.

---

# OUTPUT FORMAT (JSON ONLY):

{
"hook": "Scroll-stopping opening line",
"best_title": "High-performing optimized title",
"variations": [
{ "text": "Variation 1", "angle": "curiosity" },
{ "text": "Variation 2", "angle": "fear" },
{ "text": "Variation 3", "angle": "mistake" },
{ "text": "Variation 4", "angle": "contrarian" },
{ "text": "Variation 5", "angle": "relatable" }
],
"hashtags": ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"],
"insight": "Short explanation of why this will perform better"
}

NO markdown.
NO explanation outside JSON.`,
        user: (input) => `Optimize this YouTube Shorts idea: "${input}"\n\nYou must:\n* make it more clickable\n* make it more engaging\n* increase retention potential\n\nRequirements:\n* Generate a strong hook (first 1–2 seconds)\n* Create a high-performing title\n* Generate 5 variations using different psychological triggers\n* Add strategic hashtags\n* Explain briefly why it works\n\nAvoid anything generic.\nMake it feel like viral content.`
    }
};

// --- STATE ---
let activeTool = 'youtube';
let isLoading = false;
let currentResult = null;

// --- ELEMENTS ---
const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const toolBtns = document.querySelectorAll('.tool-btn');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const resultsArea = document.getElementById('resultsArea');
const bestResultText = document.getElementById('bestResultText');
const critiqueText = document.getElementById('critiqueText');
const scoreValue = document.getElementById('scoreValue');
const variationsGrid = document.getElementById('variationsGrid');
const refreshBtn = document.getElementById('refreshBtn');
const boostHeroBtn = document.getElementById('boostHeroBtn');

// --- FUNCTIONS ---

function updateTool(toolId) {
    activeTool = toolId;
    toolBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tool === toolId);
    });
    // Optional: clear results when switching tools
    // resetUI();
}

function resetUI() {
    resultsArea.classList.add('hidden');
    emptyState.classList.remove('hidden');
    loadingState.classList.add('hidden');
}

async function handleGenerate(overrideInput = null, modifier = "") {
    const input = overrideInput || promptInput.value;
    if (!input.trim() || isLoading) return;

    setLoading(true);

    try {
        const response = await fetch("/api/generate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: "system", content: PROMPTS_CONFIG[activeTool].system },
                    { 
                        role: "user", 
                        content: PROMPTS_CONFIG[activeTool].user(input) + (modifier ? `\n\n${modifier}` : "")
                    }
                ],
                model: MODEL_NAME,
                response_format: { type: "json_object" }
            })
        });

        if (!response.ok) throw new Error("API call failed");
        
        const data = await response.json();
        const output = JSON.parse(data.choices?.[0]?.message?.content || "{}");
        
        displayResults(output);
    } catch (err) {
        console.error(err);
        alert("Something went wrong. Please check your connection or API key.");
        setLoading(false);
    }
}

function setLoading(val) {
    isLoading = val;
    generateBtn.disabled = val;
    generateBtn.querySelector('.spinner').classList.toggle('hidden', !val);
    generateBtn.querySelector('.btn-text').classList.toggle('hidden', val);
    generateBtn.querySelector('[data-lucide="arrow-right"]').classList.toggle('hidden', val);
    
    if (val) {
        emptyState.classList.add('hidden');
        resultsArea.classList.add('hidden');
        loadingState.classList.remove('hidden');
    } else {
        loadingState.classList.add('hidden');
    }
}

function displayResults(data) {
    currentResult = data;
    setLoading(false);
    
    emptyState.classList.add('hidden');
    resultsArea.classList.remove('hidden');
    resultsArea.classList.add('animate-in');

    // Select UI elements
    const hookContainer = document.getElementById('hookContainer');
    const hookText = document.getElementById('hookText');
    const hashtagsSection = document.getElementById('hashtagsSection');
    const hashtagsGrid = document.getElementById('hashtagsGrid');
    const scoreLabel = document.getElementById('scoreLabel');

    // Handle standard vs shorts format
    const isShorts = activeTool === 'shorts';

    // Hero Section
    if (isShorts) {
        // Shorts Specific
        bestResultText.textContent = data.best_title || "";
        critiqueText.textContent = data.insight ? `Viral Logic: ${data.insight}` : "";
        
        hookContainer.classList.remove('hidden');
        hookText.textContent = data.hook || "";
        
        hashtagsSection.classList.remove('hidden');
        hashtagsGrid.innerHTML = '';
        data.hashtags?.forEach(tag => {
            const chip = document.createElement('span');
            chip.className = 'hashtag-chip';
            chip.textContent = tag;
            hashtagsGrid.appendChild(chip);
        });

        scoreValue.textContent = "Elite";
        scoreLabel.textContent = "Viral Blueprint Loaded";
    } else {
        // Standard Format
        bestResultText.textContent = data.best_result || "";
        const critique = data.critique?.[0];
        critiqueText.textContent = critique ? `"${critique.title}: ${critique.description}"` : "";
        scoreValue.textContent = `${data.score?.value || 0}/10`;
        scoreLabel.textContent = data.score?.label || "Potential";
        
        if (data.score?.reason) {
            scoreLabel.textContent += ` • ${data.score.reason}`;
        }
        
        hookContainer.classList.add('hidden');
        hashtagsSection.classList.add('hidden');
    }

    // Variations
    variationsGrid.innerHTML = '';
    data.variations?.forEach((v, index) => {
        const strategy = v.strategy || v.angle || "Variation";
        const card = document.createElement('div');
        card.className = 'var-card';
        card.innerHTML = `
            <div class="strategy-badge">${strategy}</div>
            <p class="var-text">"${v.text}"</p>
            <div class="var-actions">
                <button class="var-btn copy-var" data-text="${v.text.replace(/"/g, '&quot;')}">
                    <i data-lucide="copy"></i>
                    <span>Copy</span>
                </button>
                <button class="var-btn refine-var" data-text="${v.text.replace(/"/g, '&quot;')}">
                    <i data-lucide="mouse-pointer-2"></i>
                    <span>Refine</span>
                </button>
                <button class="var-btn boost-var" data-text="${v.text.replace(/"/g, '&quot;')}">
                    <i data-lucide="trending-up"></i>
                    <span>Stronger</span>
                </button>
            </div>
        `;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.var-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });

        variationsGrid.appendChild(card);
    });

    // Re-initialize icons for new elements
    lucide.createIcons();

    // Auto-scroll
    resultsArea.scrollIntoView({ behavior: 'smooth' });
}

async function copyToClipboard(text, btnElement) {
    try {
        await navigator.clipboard.writeText(text);
        const originalContent = btnElement.innerHTML;
        btnElement.innerHTML = `<i data-lucide="check"></i><span>Copied!</span>`;
        lucide.createIcons();
        setTimeout(() => {
            btnElement.innerHTML = originalContent;
            lucide.createIcons();
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// --- EVENT LISTENERS ---

toolBtns.forEach(btn => {
    btn.addEventListener('click', () => updateTool(btn.dataset.tool));
});

generateBtn.addEventListener('click', () => handleGenerate());

document.addEventListener('DOMContentLoaded', () => {
    const savedPrompt = localStorage.getItem('ur_title_initial_prompt');
    if (savedPrompt && promptInput) {
        promptInput.value = savedPrompt;
        localStorage.removeItem('ur_title_initial_prompt');
    }
});

refreshBtn.addEventListener('click', () => handleGenerate(null, "Give me a fresh batch of variations."));

boostHeroBtn.addEventListener('click', () => {
    if (currentResult) {
        const textToBoost = activeTool === 'shorts' ? currentResult.best_title : currentResult.best_result;
        handleGenerate(textToBoost, "Increase viral intensity.");
    }
});

// Event Delegation for dynamic cards
variationsGrid.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-var');
    const refineBtn = e.target.closest('.refine-var');
    const boostBtn = e.target.closest('.boost-var');

    if (copyBtn) {
        copyToClipboard(copyBtn.dataset.text, copyBtn);
    } else if (refineBtn) {
        promptInput.value = refineBtn.dataset.text;
        handleGenerate(refineBtn.dataset.text);
    } else if (boostBtn) {
        handleGenerate(boostBtn.dataset.text, "Increase intensity.");
    }
});

document.querySelector('.copy-btn[data-copy="hero"]').addEventListener('click', (e) => {
    if (currentResult) {
        const textToCopy = activeTool === 'shorts' ? currentResult.best_title : currentResult.best_result;
        copyToClipboard(textToCopy, e.currentTarget);
    }
});

const copyHashtagsBtn = document.getElementById('copyHashtagsBtn');
if (copyHashtagsBtn) {
    copyHashtagsBtn.addEventListener('click', (e) => {
        if (currentResult && currentResult.hashtags) {
            copyToClipboard(currentResult.hashtags.join(' '), e.currentTarget);
        }
    });
}

// Allow Cmd/Ctrl + Enter to generate
promptInput.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        handleGenerate();
    }
});
